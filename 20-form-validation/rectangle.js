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
  //字符校验
  //1.event keypress
  //2.event argument get key value   e.key当前按了哪个键  e.target.value 文本框里面的值
  //3.非法键屏蔽掉  e.preventDefault()
  //4.合法字符还要考虑出现的位置  列如： . e E  -
$width.keypress(function(e){
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key))
   {
      e.preventDefault();
      return;
   }

//合法字符e
//允许出现在非科学计数法的数字末尾
//允许出现在非科学计数法的数字中间
//不允许出现在非科学计数法的数字前面
//不允许出现在空文本中
//不允许出现在负号后面
//不允许出现在科学计数法(e 和E)数字的末尾、前面、中间

var pos=e.target.selectionStart,
    con=e.target.value;
  if(e.key==='e')
  {
    if(pos===0||con.indexOf('e')!==-1||con.indexOf('E')!==-1)
{
  e.preventDefault();
  return; 
}
   if(pos===1&&con.substring(0,1)==='-')
{
  e.preventDefault();
  return;
}
  }
//合法字符E



//合法字符.


//合法字符-
 });

  
$height.keypress(function(e){
  
  
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key))
   {
      e.preventDefault();
      return;
   }

//合法字符e
//允许出现在非科学计数法的数字末尾
//允许出现在非科学计数法的数字中间
//不允许出现在非科学计数法的数字前面
//不允许出现在空文本中
//不允许出现在负号后面
//不允许出现在科学计数法(e 和E)数字的末尾、前面、中间

var pos=e.target.selectionStart,
    con=e.target.value;
  if(e.key==='e')
  
  
  {
    if(pos===0||con.indexOf('e')!==-1||con.indexOf('E')!==-1)
{
  e.preventDefault();
  return; 
}
   if(pos===1&&con.substring(0,1)==='-')
{
  e.preventDefault();
  return;
}
  }
//合法字符E



//合法字符.
  
});


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
