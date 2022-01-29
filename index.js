
   
    let form = document.getElementById('expform');
    const btn = document.getElementById('btn');
    
   
                 
    btn.addEventListener('click', addExpense); 

    const tabledata = [];

    
    function addExpense(){
        // e.preventDefult();

        let type = document.getElementById('type').value;
        let name = document.getElementById('name').value;
        let date = document.getElementById('date').value;
        let amount = document.getElementById('amount').value;

        if( type != 'chooseOne' || name.length >0 || date != 0 || amount > 0){
            let obj = { type,
                name,
                date,
                amount
                } 

            tabledata.push(obj);
          
        }  
        showFunction()
        
    }

    function showFunction(){
        let expnTable = document.getElementById('expnTable');
        // expnTable.innerHTML = '';

        for(i=0; i<tabledata.length; i++){
            expnTable.innerHTML +=  `
            <tr>

            <td>${tabledata[i].type}</td>
            <td>${tabledata[i].name}</td>
            <td>${tabledata[i].date}</td>
            <td>$${tabledata[i].amount}</td> 

            </tr>`;
        }
     }
         
         

  
        


   
