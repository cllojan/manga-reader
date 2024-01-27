
function MangaItem() {
    return (
        <a className="item" href="#">
            <div className="image_container">
                <img className="image" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-tZVlfBCHbrNL.jpg" alt="uwu" srcSet=""/>
            </div>            
            <h1 className="item_title" >One Piece</h1>
            <p className="item_text"><span>Manga</span></p>
        </a>
    )
}

export default MangaItem;