import {registerJQueryPlugin} from '../../utils'

const defaultOptions = {
  dom: null,
  totalCount: 0,
  pageSize: 10,
  pageNum: 1,
  onSwitch: function(pageNum, pageSize, totalCount){}
}
const tmpl = `<div class="uusm-ui-pagination">
  <span class="pagination-btns">
    {{pageBtns}}
  </span>
  <span class="pagination-jump">
    <span>跳转至&nbsp;&nbsp;第</span>
    <input type="text" />
    <span>页</span>
    <a href="javascript:;">确定</a>
  </span>
</div>`
const Pagination = function(options = {}){
  let self = this
  let opt = self.options = $.extend({}, defaultOptions, options)
  let $dom = $(this.options.dom)

  this.render(true)

  $dom.off('click', '.pagination-btns a').on('click', '.pagination-btns a', function(e){
    let $self = $(e.currentTarget)
    self.switchTo($self.data('action'))
  })

  $dom.off('click', '.pagination-jump a').on('click', '.pagination-jump a', function(e){
    let pageIndex = parseInt($dom.find('.pagination-jump input').val())
    self.switchTo(pageIndex)
  })

  $dom.off('keypress', '.pagination-jump input').on('keypress', '.pagination-jump input', function(e){
    if(e.keyCode == 13){
      self.switchTo(parseInt($(this).val()))
    }
  })
}

Pagination.prototype.render = function(isFirst){
  let {dom, totalCount, pageSize, pageNum, onSwitch} = this.options
  let totalPage = this.options.totalPage = Math.ceil(totalCount/pageSize)
  let $dom = $(dom)
  let pageBtns = this.getPageBtns()
  $dom.html(tmpl.replace(/\{\{(\w+)?\}\}/g, (_, _1) => eval(_1) ))
  !isFirst && onSwitch.call(null, pageNum, pageSize, totalCount)
}

Pagination.prototype.getPageBtns = function(){
  let {totalCount, pageSize, pageNum} = this.options
  let totalPage = this.options.totalPage = Math.ceil(totalCount/pageSize)
  let groupCount = 5, half = Math.floor(groupCount / 2), start = 1, end = 1, startEllipsis = false, endEllipsis = false
  let arr = []
  if(totalPage <= groupCount + 1){
    start = 1
    end = totalPage
    for(let i = start; i <= end; i++){
      arr.push(i)
    }
  }else{
    start = pageNum - half
    end = pageNum + half
    if(start <= 0){
      start = 1
    }
    if(end >= totalPage){
      end = totalPage
    }
    if(end < groupCount){
      end = groupCount
    }
    if(totalPage - pageNum <= half + 1){
      start = totalPage - groupCount + 1
    }
    if(start >= 2){
      startEllipsis = true
    }
    if(end < totalPage - 1){
      endEllipsis =  true
    }
    for(let i = start; i <= end; i++){
      arr.push(i)
    }
    if(startEllipsis){
      arr.unshift(1, '...')
    }
    if(endEllipsis){
      arr.push('...', totalPage)
    }
    if(end == totalPage - 1){
      arr.push(totalPage)
    }
  }

  let htmlArr = [`<a href="javascript:;" class="${pageNum == 1? 'disabled' : ''}" data-action="prev">上一页</a>`]
  for(let i = 0; i < arr.length; i++){
    if(isNaN(arr[i])){
      htmlArr.push(`<span>...</span>`)
    }else{
      let className = pageNum === arr[i] ? 'active' : ''
      htmlArr.push(`<a href="javascript:;" class="${className}" data-action="${arr[i]}">${arr[i]}</a>`)
    }
  }
  htmlArr.push(`<a href="javascript:;" class="${pageNum == totalPage ? 'disabled' : ''}" data-action="next">下一页</a>`)
  return htmlArr.join('')
}

Pagination.prototype.switchTo = function(pageIndex){
  let {totalCount, totalPage, pageNum} = this.options
  if(pageIndex == pageNum) return
  if(isNaN(pageIndex)){
    switch (pageIndex){
      case 'prev':
        pageIndex = pageNum - 1
        break
      case 'next':
        pageIndex = pageNum + 1
        break
      default:
        pageIndex = 1
    }
    this.switchTo(pageIndex)
  }else{
    if(pageIndex < 1 || pageIndex > totalPage){
      return
    }
    this.options.pageNum = pageIndex
    this.render(false)
  }
}

registerJQueryPlugin('pagination', function(options){
  options.dom = this
  new Pagination(options)
})

export {
  Pagination
}
