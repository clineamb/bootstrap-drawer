/* ========================================================================
 * Bootstrap: offcanvas.js v3.3.2
 # Heavily based on collapse, but had to change the name to "fold" to 
 # avoid transition conflicts.
 * ========================================================================
*/


+function ($) {
  'use strict';

  // OFF CANVAS PUBLIC CLASS DEFINITION
  // ================================

  var OffCanvas = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, OffCanvas.DEFAULTS, options)
    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndOffCanvasdClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  OffCanvas.VERSION  = '3.3.2'

  OffCanvas.TRANSITION_DURATION = 350

  OffCanvas.DEFAULTS = {
    toggle: true,
    trigger: '[data-toggle="offcanvas"]'
  }

  OffCanvas.prototype.dimension = function () {
    var isRight = this.$element.hasClass('offcanvas-right')
    return isRight ? 'margin-right' : 'margin-left'
  }

  OffCanvas.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('open')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.fold')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.fold')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.fold', null)
    }

    var dimension = this.dimension()

    this.$element
      .addClass('folding').css(dimension, 0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('folded')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('folding')
        .addClass('fold open').css(dimension, '')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.fold')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(OffCanvas.TRANSITION_DURATION).css(dimension, 0)
  }

  OffCanvas.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('open')) return

    var startEvent = $.Event('hide.bs.fold')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      .addClass('folding')
      .removeClass('open')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('folded')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('folding')
        .addClass('fold')
        .trigger('hidden.bs.fold')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      .css(dimension, '')
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(OffCanvas.TRANSITION_DURATION)
  }

  OffCanvas.prototype.toggle = function () {
    this[this.$element.hasClass('open') ? 'hide' : 'show']()
  }

  OffCanvas.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="offcanvas"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndOffCanvasdClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  OffCanvas.prototype.addAriaAndOffCanvasdClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('open')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('folded', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // OFFCANVAS PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.fold')
      var options = $.extend({}, OffCanvas.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') options.toggle = false
      if (!data) $this.data('bs.fold', (data = new OffCanvas(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.fold

  $.fn.offcanvas             = Plugin
  $.fn.offcanvas.Constructor = OffCanvas


  // OFFCANVAS NO CONFLICT
  // ====================

  $.fn.offcanvas.noConflict = function () {
    $.fn.fold = old
    return this
  }


  // OFFCANVAS DATA-API
  // =================

  $(document).on('click.bs.fold.data-api', '[data-toggle="offcanvas"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.fold')
    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })

    Plugin.call($target, option)
  })

}(jQuery);