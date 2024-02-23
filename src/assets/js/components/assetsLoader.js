import * as helper from '@root/utils/helper';

class AssetsLoader{
    constructor(fileSrc, callback){
        this.callback = callback;
        this.fileSrc = fileSrc;
        this.init();
    }

    dispatcher( obj ){
        if (typeof this.callback !== 'undefined'){
            this.callback(obj);
        }
    }

    loadAll(files){
        const promises = Object.values(files).map(helper.loadImage);
        return Promise.all(promises);
    }

    init(){
        this
        .loadAll(this.fileSrc)
        .then((files)=>{
            this.dispatcher({ type: 'success', data: files });
        })
        .catch((error)=>{
            this.dispatcher({ type: 'error', message: error });
        })
    }
}

export default AssetsLoader;