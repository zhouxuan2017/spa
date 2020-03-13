$(function(){
  //get dom elem
  var $width=$('#width'),
      $height=$('#height'),
      $butCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');


  /*calc button click event*/
$butCal.click(function(){

  //validate if error return; 
  if(!validate('#width') || !validate('#height')) return;

  //get value
  var w=Number($width.val()),
      h=Number($height.val());

  //calculate
    var p=2*(w+h),
       a=w*h;

var r=new Rectangle(w,h);

  //output
  $perimeter.val(r.perimeter());
  $area.val(r.area());
})

$width.focusout(function(){
  //if(!validate(width)) select this;
  if(!validate('#width')) $width.select()
});

$height.focusout(function(){
 // if(!validate(height)) select this;
 if(!validate('#height')) $height.select();
})

function validate(field){

  //get DOM error message
  var $data=$(field),
      $msg=$(field+'-validation-message');

  //validate null
  if($data.val()==='')
  {
    $msg.html('不能为空！');
    $data.select();
    return false;
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val()))
  {
        $msg.html('必须是数值！');
            $data.select(); 
                return false;
  }

  //validate>0
  if(Number($data.val())<0){
      $msg.html('必须大于0!');
      $data.select();
      return false;
 }

    //prompt error message
    //  //return false
   $msg.html('') 
  return true;



}
})
