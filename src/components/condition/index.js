import {registerJQueryPlugin} from '../../utils'

const defaultOptions = {
  dom: null,
  items: {},
  onSelect: function(value, el){}
}

const tmpl = `
<div class="multiple-operate">
  <a href="javascript:;" class="uusm-ui-button btn-cancel">取消</a>
  <a href="javascript:;" class="uusm-ui-button btn-gray btn-confirm">提交</a>
</div>`

const Condition = function(options = {}){
  let self = this
  let opt = self.options = $.extend({}, defaultOptions, options)

  this.render()

  this.bindEvent()
}

Condition.prototype.render = function(){
  let {dom, defaultValue, items} = this.options
  let $dom = $(dom)

}

Condition.prototype.bindEvent = function(){
  let {dom, eventName, onSelect, activeClass} = this.options
  let $dom = $(dom)

  $dom.on('click', '.btn-multiple', function(e){
    let $self = $(e.currentTarget)
    let $parent = $self.parents('.condition-item')
    let $multipleOp = $parent.find('.multiple-operate')

    if(!$multipleOp.length){
      $multipleOp = $parent.append(tmpl)
    }
    $parent.find('.selected-texts').remove()
    $parent.find('ul').show()
    let isFirst = true
    $parent.find('li').each(function(index, item){
      let $item = $(item)
      let $check = $item.find('i')
      if(!$check.length){
        $check = $('<i/>').prependTo($item)
      }
      if($item.hasClass('active') && isFirst){
        $item.attr('data-actived', 1)
        isFirst = false
      }
    })
    if(!$parent.find('li.active').length){
      $parent.find('.btn-confirm').addClass('disabled')
    }
    $parent.addClass('expanded')
  })

  $dom.on('click', '.btn-cancel', function(e){
    let $self = $(e.currentTarget)
    let $parent = $self.parents('.condition-item')
    $parent.find('li').removeClass('active')
    $parent.removeClass('expanded')
    //$parent.find('li[data-actived]').addClass('active')
  })

  $dom.on('click', '.btn-confirm', function(e){
    let $self = $(e.currentTarget)
    if($self.hasClass('disabled')){
      return
    }
    let $parent = $self.parents('.condition-item')
    $parent.removeClass('expanded')
    let values = [], texts = [], $selectedList = $parent.find('li.active')
    $selectedList.each(function(index, item){
      let $item = $(item)
      values.push($item.data('value'))
      texts.push($item.find('a').text())
    })
    var $selectedText = $parent.find('.selected-texts')
    if($selectedText.length === 0){
      $selectedText = $(`<div class="selected-texts"></div>`).appendTo($parent.find('dd'))
    }
    $selectedText.html(`${texts.join('、')}<a href="javascript:;" class="btn-clear">&times;</a>`).show()
    $parent.find('ul').hide()
    $parent.find('.btn-multiple').hide()
    onSelect.call(null, values)
  })

  $dom.on('click', '.btn-clear', function(e){
    let $self = $(e.currentTarget)
    let $parent = $self.parents('.condition-item')
    $self.parent().hide()
    $parent.find('ul').show()
    $parent.find('.btn-multiple').show()
    $parent.find('li').removeClass('active')
    //$parent.find('li[data-actived]').addClass('active')
    onSelect.call(null, [])
  })

  $dom.on('click', 'li', function(e){
    let $self = $(e.currentTarget)
    let $parent = $self.parents('.condition-item')

    if($parent.hasClass('expanded')){
      $self.toggleClass('active')
      if($parent.find('li.active').length === 0){
        $parent.find('.btn-confirm').addClass('disabled')
      }else{
        $parent.find('.btn-confirm').removeClass('disabled')
      }
    }else{
      if($self.hasClass('active')){
        return
      }
      $self.siblings().removeClass('active').removeAttr('data-actived')
      $self.addClass('active')
      onSelect.call(null, [$self.data('value')])
    }
  })
}

registerJQueryPlugin('condition', function(options){
  options.dom = this
  new Condition(options)
})

export {
  Condition
}
