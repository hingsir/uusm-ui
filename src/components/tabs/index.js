import {registerJQueryPlugin} from '../../utils'

const defaultOptions = {
  dom: null,
  selector: '> *',
  activeClass: 'active',
  activeIndex: 0,
  eventName: 'click', // click | mouseover
  target: function(){
    return $($(this).data('target'))
  },
  onSwitch: function(index, el){}
}

const Tabs = function(options = {}){
  let self = this
  let opt = self.options = $.extend({}, defaultOptions, options)
  let {dom, selector, activeIndex, eventName} = opt

  self.switchTo(activeIndex)

  $(dom).on(eventName, selector, function(e){
    let $self = $(e.currentTarget)
    self.switchTo($self.index())
  })
}

Tabs.prototype.switchTo = function(index) {
  let {dom, selector, activeClass, activeIndex, target, onSwitch} = this.options
  let $dom = $(dom), $tabItems = $dom.find(selector)
  let $self = $tabItems.eq(index)

  $tabItems.removeClass(activeClass)
  $self.addClass(activeClass)

  $tabItems.each(function(index, item){
    target.call(item).hide()
  })
  target.call($self).show()

  onSwitch.call(null, index, $self)
}

registerJQueryPlugin('tabs', function(options){
  options.dom = this
  new Tabs(options)
})

export {
  Tabs
}
