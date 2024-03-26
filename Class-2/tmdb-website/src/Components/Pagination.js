function Pagination(){
    return (
        <div className="flex justify-center gap-10 h-10 items-center bg-red-300">
            <div className="hover:scale-105 cursor-pointer"><i class="fa-solid fa-arrow-left"></i></div>
            <div className="cursor-pointer">1</div>
            <div className="hover:scale-105 cursor-pointer"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination;