import bugModel from '../models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:12345,
        name:"crash on load",
        datails:"crashes after three seconds",
        steps:"open application and it will crash",
        version:"V2.0",
        assigned: "David Coombs",
        creator: "John Mikes",
        priority: 1,
        time: "3:17",
    }))
    data.push(new bugModel({
        _id:12345,
        name:"wont load",
        datails:"crashes after three seconds",
        steps:"open application and it will crash",
        version:"V2.0",
        assigned: "David Coombs",
        creator: "John Mikes",
        priority: 3,
        time: "3:17",
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}