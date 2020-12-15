import { Button, Paper, Switch, TextField } from "@material-ui/core";

export default function Card (props) {


    return (
        <Paper style={{width:'80%',display:'flex', padding:'20px', flexDirection:'column', justifyContent:'space-between',border:'solid 1px black', height:'350px'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Switch color='primary' checked={props.data.toggle} onChange={()=>props.toggle(props.data.id)}></Switch>        
                {props.data.editable ? <h3 style={{marginTop:'0px'}} onClick={()=>props.deleteCard(props.data.id)}>x</h3> : ''}
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>

                <TextField value={props.data.title} contentEditable={props.data.editable} onChange={(event)=>props.setTitle(event, props.data.id)} InputProps={{style: {fontWeight:'1500',fontSize: '20px'}, disableUnderline: true }} style={{marginTop:'20px'}}/>
                <TextField value={props.data.remarks} onChange={(event)=>props.setRemarks(event, props.data.id)} style={{marginTop:'20px', textAlign:'center'}} placeholder={'Enter Your Remarks'}/>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <hr style={{ color: 'black',width:'100%',backgroundColor: 'black', height: '0.5px'}}/>
                <Button variant="outlined" color="primary" style={{height:'50px',fontWeight:'bold',alignSelf:'center', alignContent:'flex-end',width:'100%'}} >Add Attachments</Button>
            </div>
        </Paper>
    )
}