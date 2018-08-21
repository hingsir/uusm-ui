import {registerJQueryPlugin} from '../../utils'

const defaultOptions = {
  dom: null,
  items: {},
  activeClass: 'active',
  defaultValue: null,
  eventName: 'click', // click | mouseover
  onSelect: function(index, el){}
}

const tmpl = `
<div class="uusm-ui-select">
  <div class="uusm-ui-select-text">{{text}}</div>
  <i class="uusm-ui-select-icon"></i>
  <ul class="uusm-ui-select-list">
    {{itemsHtml}}
  </ul>
</div>`

const Select = function(options = {}){
  let self = this
  let opt = self.options = $.extend({}, defaultOptions, options)

  this.render()

  this.bindEvent()
}

Select.prototype.render = function(){
  let {dom, defaultValue, items} = this.options
  let $dom = $(dom)
  let text = defaultValue
  if(!defaultValue){
    for(let key in items){
      this.options.defaultValue = key
      text = items[key]
      break
    }
  }
  let itemsHtml = this.getItemsHtml()
  $dom.html(tmpl.replace(/\{\{(\w+)?\}\}/g, (_, _1) => eval(_1) ))
}

Select.prototype.bindEvent = function(){
  let {dom, eventName, onSelect, activeClass} = this.options
  let $dom = $(dom),
      $text = $dom.find('.uusm-ui-select-text'),
      $list = $dom.find('.uusm-ui-select-list'),
      $icon = $dom.find('.uusm-ui-select-icon')
  $dom.on(eventName, function(e){
    $list.show()
    $icon.addClass('expanded')
  }).on('mouseleave', function(){
    $list.hide()
    $icon.removeClass('expanded')
  })
  $list.on('click', 'li', function(e){
    let $self = $(e.currentTarget)
    let value = $self.data('value')
    $list.find('li').removeClass(activeClass)
    $self.addClass(activeClass)
    $text.html($self.html())
    $dom.attr('data-value', value)
    $list.hide()
    $icon.removeClass('expanded')
    onSelect.call(null, value , $self)
  })
}

Select.prototype.getItemsHtml = function(){
  let {items, defaultValue, activeClass} = this.options
  let itemsHtml = []
  for(let key in items){
    let clazz = key == defaultValue ? activeClass : ''
    itemsHtml.push(`<li data-value="${key}" class="${clazz}">${items[key]}</li>`)
  }
  return itemsHtml.join('')
}

registerJQueryPlugin('select', function(options){
  options.dom = this
  new Select(options)
})

export {
  Select
}
