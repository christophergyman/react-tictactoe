import SquareButton from "./SquareButton";
export function Board(){
    return(
          <div className='grid grid-rows-3 grid-flow-col gap-4'>
            <SquareButton/>
            <SquareButton/>
            <SquareButton/>
            <SquareButton/>
            <SquareButton/>
            <SquareButton/>
            <SquareButton/>
            <SquareButton/>
            <SquareButton/>
          </div>
    );
};

export default Board