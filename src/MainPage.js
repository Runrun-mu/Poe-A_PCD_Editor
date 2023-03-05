import SearchPanel from "./components/SearchPanel";
import ControlPanel from "./components/ControlPanel";
import React from "react";

const dummyListData=[
    {id:1,fileName:'zeghtti.pcd'},
    {id:2,fileName:'globalMap.pcd'},
    {id:3,fileName:'mushapotei.pcd'},
    {id:4,fileName:'npx.lac'}
]

class MainPage extends React.Component{
    constructor(){
        super();
        this.state={searchList:[],displayedItem:{fileType:'pcd',fileName:''},message:''};
        this.selectButtonHandler=this.selectButtonHandler.bind(this);
        this.searchButtonHandler=this.searchButtonHandler.bind(this);
        this.handleFileChangeLocal=this.handleFileChangeLocal.bind(this);
        this.uploadFile=this.uploadFile.bind(this);
    }
    componentDidMount(){
        this.loadData(dummyListData);
    }
    loadData(listData){
        // load data
        this.setState({searchList:listData});
    }
    searchButtonHandler(){

    }
    selectButtonHandler(item){
        this.setState({displayedItem:item});
    }
    uploadFile(){
        //  first add to searchList for displaying 
        if(this.state.displayedItem.fileName===''){
                ;
        }
        else{

            const id =this.state.searchList.length+1;
            this.state.searchList.push({
                id:id,
                fileName:this.state.displayedItem.fileName
            });
        }
    }
    openFromLocal(){
        const localFile=document.getElementById('read_file');
        localFile.click();
    }
    saveToLocal(){

    }
    handleFileChangeLocal(event){
        const filePath = event.target.value; 
        var fileName=filePath.split('\\');
        fileName=fileName[fileName.length-1];

        var fileType=fileName.split('.');
        fileType=fileType[fileType.length-1];
        this.setState({message:String(fileName)});
        this.setState({displayedItem:{fileType:fileType,fileName:filePath}});
    }


    render(){
        //console.log('?',this.props.searchList);
        return <div>
            {/* this is the header panel*/}
            <div >
                <h1>open4vision</h1>
            </div>
            <div style={{"width":'100%'}}>
            {/* blow is the  searchPanel,main*/}
                <div style={{"width":"30%","display":'inline',"float":"left","backgroundColor":'red'}}>
                {/* write the search list here searchPanel*/}
                    <h1>dummy search list</h1>
                    < SearchPanel searchList={this.state.searchList} searchButtonHandler={this.searchButtonHandler} selectButtonHandler={this.selectButtonHandler}/>
                </div>
                <div style={{"width":"70%","display":'inline',"float":"left","backgroundColor":"green"}}>
                    {/* write the control panel here controlPanel */}
                    <h1>dummy control panel</h1>
                    <ControlPanel displayedItem={this.state.displayedItem}/>
                </div>
            </div>
            <div style={{"clear":"both","backgroundColor":"yellow"}}>
                {/* write the foot print here, and the fromfile, upload, savetolocal button*/}
                <h1 >dummy footprint</h1>
                <label >{this.state.message}</label>
                <br/>
                <input style={{display: 'none'}} id="read_file" type="file" onChange={this.handleFileChangeLocal}/>
                <button onClick={this.openFromLocal}>open from local</button>
                <button onClick={this.uploadFile}>upload to server</button>
                <input style={{display: 'none'}} id="save_file" type="file" onChange={this.handleFileChangeLocal}/>
                <button onClick={this.saveToLocal}>save to local</button>
            </div>
        </div>
    }

}


export default MainPage;