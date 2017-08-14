import Modal from './component';
import Vue from 'vue';

const MessageConstructor = Vue.extend(Modal);
let instance;
let promise;

const callback = action => {
  if (promise) {
    if (promise.resolve) {
      if(action=="ok"){
        if(instance.type=="prompt"){
          promise.resolve(instance.inputVal)
        }else{
          promise.resolve(true)
        }
      }else if(action="cancel"){
        promise.reject(false)
      }
    }
  }
};


const Message=function(options){
  if(!instance){
     instance = new MessageConstructor({
      el: document.createElement('div'),
    });
  }
  for(let i in options){
    instance[i]=options[i];
  }
  instance.visible=true;
  instance.open()

  instance.callback=callback;
  document.body.appendChild(instance.$el);
  return new Promise((resolve, reject) => {
    promise={resolve:resolve,reject:reject}
  });

}

Message.alert=function(title='',content=''){
  let options={};
  if(typeof arguments[0]=="object"){
    options=title;
  }
  else if(arguments.length==1){
    options.content=title;
  }else{
    options.title=title;
    options.content=content;
  }
  options.type="alert";
  return Message(options)
}
Message.prompt=function(title='',content=''){
  let options={};
  if(typeof arguments[0]=="object"){
    options=title;
  }
  else if(arguments.length==1){
    options.content=title;
  }else{
    options.title=title;
    options.content=content;
  }
  options.type="prompt";
  return Message(options)
}
Message.confirm=function(title='',content=''){
  let options={};
  if(typeof arguments[0]=="object"){
    options=title;
  }
  else if(arguments.length==1){
    options.content=title;
  }else{
    options.title=title;
    options.content=content;
  }
  options.type="confirm";
  return Message(options)
}

export default Message;
