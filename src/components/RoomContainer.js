import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../Context';
import Loading from '../components/Loading'

function RoomContainer({context}){
    const {loading,sortedRooms,rooms} = context
    if(loading){
        return <Loading/>
        }
        return(
            <div>
                <RoomFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
            </div>
        )
    
}

export default withRoomConsumer(RoomContainer)





// import React from 'react'
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../Context';
// import Loading from '../components/Loading'

// export default function RoomContainer() {
//     return (
//         <>
//         <RoomConsumer>
//             {
//                 (value) => {
//                     //console.log(value)
//                     const {loading,sortedRooms,rooms} = value
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return(
//                         <div>
//                             hello from rooms container
//                             <RoomFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//         </>
//     )
// }
