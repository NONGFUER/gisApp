var imgFile = {};
$("#filePicker").on("change",function(e){
	handleInputChange (e,1);
});
$("#filePicker1").on("change",function(e){
	handleInputChange (e,2);
});
$("#filePicker2").on("change",function(e){
	handleInputChange (e,3);
});
$("#filePicker3").on("change",function(e){
	handleInputChange (e,4);
});
function handleInputChange (event,num) {
    // 获取当前选中的文件
    var file = event.target.files[0];
    var imgMasSize = 1024 * 1024 * 10; // 10MB
    // 检查文件类型
    if(['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split("/")[1]) < 0){
        // 自定义报错方式
        // Toast.error("文件类型仅支持 jpeg/png/gif！", 2000, undefined, false);
        return;
    }
    // 文件大小限制
    if(file.size > imgMasSize ) {
        // 文件大小自定义限制
        // Toast.error("文件大小不能超过10MB！", 2000, undefined, false);
        alert("文件大小不能超过10M");
        return;
    }
    // 判断是否是ios
    if(!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        // iOS
        transformFileToFormData(file,num);
        return;
    }
    // 图片压缩之旅
    transformFileToDataUrl(file,num);
}

// 将File append进 FormData
function transformFileToFormData (file,num) {
	$("#f"+num).attr("src" ,URL.createObjectURL(file));
    var formData = new FormData();
    // 自定义formData中的内容
    // type
    formData.append('type', file.type);
    // size
    formData.append('size', file.size || "image/jpeg");
    // name
    formData.append('name', 'SH18410137'+'_'+num+'.'+file.name.split('.')[1]);
    // lastModifiedDate
    formData.append('lastModifiedDate', file.lastModifiedDate);
    // append 文件
    file.name = 'SH18410137'+'_'+num+'.'+file.name.split('.')[1]
    formData.append('file', file);
    // 上传图片
    uploadImg(formData,num);
}
// 将file转成dataUrl
function transformFileToDataUrl (file,num) {
	$("#f"+num).attr("src" ,URL.createObjectURL(file));
    var imgCompassMaxSize = 400 * 1024; // 超过 200k 就压缩

    // 存储文件相关信息
    imgFile.type = file.type || 'image/jpeg'; // 部分安卓出现获取不到type的情况
    imgFile.size = file.size;
    imgFile.name = file.name;
    imgFile.lastModifiedDate = file.lastModifiedDate;
    // 封装好的函数
    var reader = new FileReader();
    // file转dataUrl是个异步函数，要将代码写在回调里
    reader.onload = function(e) {
        var result = e.target.result;
        if(result.length < imgCompassMaxSize) {
            compress(result, processData, false,num );    // 图片不压缩
        } else {
            compress(result, processData,true, num);            // 图片压缩
        }
    };
    reader.readAsDataURL(file);
}

// 使用canvas绘制图片并压缩
function compress (dataURL, callback, shouldCompress = true,num) {
    var img = new window.Image();
    img.src = dataURL;
    console.log(dataURL);
    img.onload = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var compressedDataUrl;
        if(shouldCompress){
            compressedDataUrl = canvas.toDataURL(imgFile.type, 0.2);
        } else {
            compressedDataUrl = canvas.toDataURL(imgFile.type, 1);
        }
        callback(compressedDataUrl,num);
    }
}
function processData (dataURL,num) {
    // 这里使用二进制方式处理dataUrl
    var binaryString = window.atob(dataURL.split(',')[1]);
    var arrayBuffer = new ArrayBuffer(binaryString.length);
    var intArray = new Uint8Array(arrayBuffer);
    var imgFile = this.imgFile;

    for (let i = 0, j = binaryString.length; i < j; i++) {
        intArray[i] = binaryString.charCodeAt(i);
    }
    var data = [intArray];
    let blob;
    try {
        blob = new Blob(data, { type: imgFile.type });
    } catch (error) {
        window.BlobBuilder = window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder;
        if (error.name === 'TypeError' && window.BlobBuilder){
            var builder = new BlobBuilder();
            builder.append(arrayBuffer);
            blob = builder.getBlob(imgFile.type);
        } else {
            // Toast.error("版本过低，不支持上传图片", 2000, undefined, false);
            throw new Error('版本过低，不支持上传图片');
        }
    }
    // blob 转file
    var fileOfBlob = new File([blob], imgFile.name);
    var formData = new FormData();
    // type
    formData.append('type', imgFile.type);
    // size
    formData.append('size', fileOfBlob.size);
    // name
    formData.append('name', imgFile.name);
    // lastModifiedDate
    formData.append('lastModifiedDate', imgFile.lastModifiedDate);
    // append 文件
    formData.append('file', fileOfBlob);
    uploadImg(formData,num);
}
// 上传图片
function uploadImg (formData,num) {
    var xhr = new XMLHttpRequest();
    // 进度监听
    xhr.upload.addEventListener('progress', function(e){console.log(e.loaded / e.total)}, false);
    // 加载监听
    // xhr.addEventListener('load', ()=>{console.log("加载中");}, false);
    // 错误监听
    xhr.addEventListener('error', function(){alert("上传失败")}, false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var result = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                // 上传成功
                alert("成功")
            } else {
            	alert("失败")
                // 上传失败
            }
        }
    };
   // xhr.open('POST', base.basePath + 'familymart.uploader?id='+num+'&bpmId='+localStorage.getItem('$jpid') , true);
  xhr.open('POST', base.basePath + 'batch.upload1?id='+num+'&bpmId='+localStorage.getItem('$jpid') , true);  
    xhr.send(formData);
}