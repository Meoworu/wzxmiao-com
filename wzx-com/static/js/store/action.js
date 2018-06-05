import axios from 'axios';
export default {
    uploadFile(context,file){
        let formData = new FormData();
        formData.append('name', file.fileName);
        formData.append('descriptive', file.descriptive);
        formData.append('file', file);
        console.log(formData);
        let config = {
            headers:{'content-type':'application/x-www-form-urlencoded'}
        };
        axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/file',
            config,
            data: formData
        }).then(function(res){
            if(res.data.code == 1){
                let obj = {title:'恭喜您 上传成功',type:true};
                context.commit('setMsg',obj);
            }else{
                let obj = {title:'上传失败',type:false};
                context.commit('setMsg',obj);
            }
            
        }).catch(function(err){
            let obj = {title:'服务器错误',type:false};
            context.commit('setMsg',obj);
        });
    },
    getTab(context){
        axios.get('http://127.0.0.1:3000/tabClass')
            .then(function(response){
                context.commit('setTabArr',response.data);
            })
            .catch(function(error){
            });
    },
    markdown(context,id){
        axios.get('http://127.0.0.1:3000/markdown',{
            params:{
                id:id
            }
        }).then(function(res){
                if(res.data.code == 1){
                    let html = res.data.html;
                    context.commit('setHtml',html);
                }else{
                    let obj = {title:'加载失败',type:false};
                    context.commit('setMsg',obj);
                }
            })
            .catch(function(err){
                let obj = {title:'服务器错误',type:false};
                context.commit('setMsg',obj);
            });
    }
}