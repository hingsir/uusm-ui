export function registerJQueryPlugin(name, func){
  $.fn[name] = function(options = {}){
    return this.each(function(){
      func.call(this, options)
    })
  }
}
