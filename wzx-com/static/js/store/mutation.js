export default {
    setUploadFlag(state, flag){
        state.uploadWinFlag = flag;
    },
    setFileArr(state, arr){
        state.fileArr = arr;
    },
    setTabArr(state, arr){
        state.tabArr = arr;
    },
    setHtml(state,html){
        state.markHtml = html;
    },
    setMsg(state, obj){
        state.msgTitle = obj.title;
        state.msgType = obj.type;
        state.msgStart = true;
        setTimeout(function(){
            state.msgStart = false;
        },4000)
    }
}