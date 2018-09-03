import {Tabs, Pagination, Select, Condition} from '../index.js'

new Tabs({
  dom: '#tabs',
  eventName: 'mouseover',
  onSwitch: function(index, el){
    console.log(index, el)
  }
})

$('#tabs2').tabs({
  onSwitch: function(index, el){
    console.log(index, el)
  }
})
function requestData(pageNum){console.log('requestData: ' + pageNum)
  $('#pagination').pagination({
    totalCount: 100,
    pageSize: 10,
    pageNum: pageNum,
    onSwitch(pageNum, pageSize, totalPage){
      requestData(pageNum)
    }
  })
}
requestData(1)

// new Select({
//   dom: '#select',
//   items: {
//     'all': '全部',
//     'cp': '产品',
//     'jl': '经理'
//   },
//   eventName: 'mouseover',
//   onSelect: function(value, el){
//     console.log(value, el)
//   }
// })
$('#select').select({
  items: {
    'all': '全部',
    'cp': '产品',
    'jl': '经理'
  },
  defaultValue: 'cp',
  eventName: 'mouseover',
  onSelect: function(value, el){
    console.log(value, el)
  }
})

$('.uusm-ui-condition').condition({
  onSelect: function(values){
    console.log(values)
  }
})
