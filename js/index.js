$(document).ready(function(){
	function mxxEnglish(index){
		//问题
		$('.lyQuestion').html((index+1)+'.'+mxxArr[index].question.ques);
		//是否是图片
		if(mxxArr[index].question.img){
			$('.mxxImg').show();
			$('.mxxImg img').attr('src','img/ques0'+(index+1)+'/'+mxxArr[index].question.img);
		}else{
			$('.mxxImg').hide();
		}
		//选择类型是文字
		if(mxxArr[index].choice.type=='img'){
			for(var i=0; i<4; i++){
				$('span.myAnswer').hide();
				$('div.myAnswer').show();
				$('div.myAnswer').find('img').eq(i).attr('src','img/ques0'+(index+1)+'/'+mxxArr[index].choice.result[i]);
			}
		}if(mxxArr[index].choice.type=='html'){
			for(var i=0; i<4; i++){
				$('div.myAnswer').hide();
				$('.lyImgBox span').eq(i).html(mxxArr[index].choice.result[i]).show();
			}
		}
	}
	var num=0;
	mxxEnglish(num);
	$(document).on("click", ".myAnswer", function(){ 
		var index=($(this).index('.myAnswer')+1)>=5?$(this).index('.myAnswer')+1-4:$(this).index('.myAnswer')+1;
		if(index==mxxArr[num].answer){
			num++;
			$('#media').attr('src','audio/success.mp3');
			$('#media')[0].play();
			$('.myAnswer').removeClass('error').removeAttr("ok");
			if(num>=mxxArr.length){
				num=mxxArr.length-1;
				return;
			}
			var t=setTimeout(function(){
				mxxEnglish(num);
			},800)
		}else{
			if(!$(this).attr('ok')){
				$(this).addClass('error').attr('ok','ok');
				$('#media').attr('src','audio/loser.mp3');
				$('#media')[0].play();
			}
			
		}
	}); 
})
