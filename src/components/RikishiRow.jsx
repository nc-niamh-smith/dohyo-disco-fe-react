function RikishiRow({sumo}) {
    return (
        <>
        <p>{sumo.shikona_en} ({sumo.shikona_jp})</p>
        <p>Rank: {sumo.current_rank}</p>
        <p> Height: {sumo.height}</p>
        <p> Weight: {sumo.weight}</p>
        </>
    )
}

export default RikishiRow;