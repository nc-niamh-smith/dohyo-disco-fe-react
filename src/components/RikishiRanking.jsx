import {useState} from 'react'
import RikishiRow from './RikishiRow'

function RikishiRanking () {
    const [rikishi, setRikishi] = useState([{id: 'id1', shikona_en: 'English name', shikona_jp: 'Japanese name', current_rank: 'ranking', height: 0.0, weight: 0.0}, {id: 'id2', shikona_en: 'English name_2', shikona_jp: 'Japanese name', current_rank: 'ranking', height: 0.0, weight: 0.0}, {id: 'id3', shikona_en: 'English name_3', shikona_jp: 'Japanese name', current_rank: 'ranking', height: 0.0, weight: 0.0}, {id: 'id4', shikona_en: 'English name_4', shikona_jp: 'Japanese name', current_rank: 'ranking', height: 0.0, weight: 0.0}])

    return (
        <>
        <h3>Rikishi Ranking</h3>
        <ul>
        {rikishi.map((sumo) => {
            return (
            <li key={sumo.id} >
            <RikishiRow sumo={sumo}/>
            </li>
            )
        })}
        </ul>
        </>
    )
}

export default RikishiRanking;