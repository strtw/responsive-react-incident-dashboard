import React from 'react';

export default function DataTable(props){

    function getColumnHeaders(){
       return props.columnMap ? Object.values(props.columnMap): Object.keys(props.data[0])
    }

    function setHeader(){
        var headers = getColumnHeaders();
        return headers.map((header, index)=>{
        return <th key={header}>{header}</th>
        })
    }

    function RenderCells(props){
        return props.columns.map((column, index)=>{
        return <td key={props.data[column]}>{props.data[column]}</td>
        })
    }

    function implementColumnMap(){
        return props.columnMap ? Object.keys(props.columnMap): Object.keys(props.data[0])
    }

    const RenderRows = function(){
        var items = props.data;
        var columns = implementColumnMap();
        return items.map((row, index)=>{
            if(row['sys_created_on']){//ensure record has creation date to avoid rendering bad data
                return <tr key={row.number}><RenderCells key={row.number + Math.random()} data={row} columns={columns}/></tr>
            }
        })
    }

        return(
            <table>
                <thead>
                    <tr>
                    {setHeader()}
                    </tr>    
                </thead>
                <tbody>
                    {RenderRows()}
                </tbody>
            </table>
        )
}