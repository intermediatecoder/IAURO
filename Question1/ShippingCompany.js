/*Question 1
Use Case: Shipping Company Optimization
Background
A shipping company needs to efficiently allocate various shipments into 
available containers. Each shipment consists of a specific number of units, 
and each container has a maximum capacity of units it can hold. The goal 
is to determine the minimum number of containers required to 
accommodate all shipments, even if units from the same shipment are split 
across multiple containers.
Scenario
Company: SwiftLogistics
Shipments: The company has n shipments to be delivered. Each shipment 
consists of a different number of units. This is represented by the array 
shipments where shipments[i] indicates the number of units in the ith shipment.
Containers: The company also has m containers available for use, each 
with a specific capacity. This is represented by the array 
container_limits where container_limits[j] indicates the 
maximum number of units that the j-th container can hold.
Problem
The operations team at SwiftLogistics needs to figure out the minimum 
number of containers required to redistribute the units from all shipments 
into the available containers*/ 

function Container_needed(a, c) {
    
    let Shipments = 0;
    for (let i = 0; i < a.length; i++) {
        Shipments += a[i];
    }

    c.sort((x, y) => {y - x});

    let containersUsed = 0; 
    
    for (let i = 0; i < c.length; i++) {
        Shipments -= c[i];
        containersUsed++; 
        if (Shipments <= 0) {
            return containersUsed 
        }
    } 
    return -1;

}

let Shipments = [10, 20,30];
let Container_limit = [15,15,20, 10];  


const ans = Container_needed(Shipments, Container_limit);
if(ans>=0){
    console.log("Minimum number of containers needed : ", ans);
}
else{
    console.log("Not Having enough Container : -1");
}

