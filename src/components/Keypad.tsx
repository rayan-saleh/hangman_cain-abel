import Keys from './Keys'

const Keypad = ({onClickButton}: any ) => {
    return (
        <>
        <div className="grid grid-cols-5 gap-4">
            
            <Keys letter={'A'} onClickButton = {onClickButton} />
            <Keys letter={'B'} onClickButton = {onClickButton} />
            <Keys letter={'C'} onClickButton = {onClickButton} />
            <Keys letter={'D'} onClickButton = {onClickButton} />
            <Keys letter={'E'} onClickButton = {onClickButton} />
            <Keys letter={'F'} onClickButton = {onClickButton} />
            <Keys letter={'G'} onClickButton = {onClickButton} />
            <Keys letter={'H'} onClickButton = {onClickButton} />
            <Keys letter={'I'} onClickButton = {onClickButton} />
            <Keys letter={'J'} onClickButton = {onClickButton} />
            <Keys letter={'K'} onClickButton = {onClickButton} />
            <Keys letter={'L'} onClickButton = {onClickButton} />
            <Keys letter={'M'} onClickButton = {onClickButton} />
            <Keys letter={'N'} onClickButton = {onClickButton} />
            <Keys letter={'O'} onClickButton = {onClickButton} />
            <Keys letter={'P'} onClickButton = {onClickButton} />
            <Keys letter={'Q'} onClickButton = {onClickButton} />
            <Keys letter={'R'} onClickButton = {onClickButton} />
            <Keys letter={'S'} onClickButton = {onClickButton} />
            <Keys letter={'T'} onClickButton = {onClickButton} />
            <Keys letter={'V'} onClickButton = {onClickButton} />
            <Keys letter={'W'} onClickButton = {onClickButton} />
            <Keys letter={'X'} onClickButton = {onClickButton} />
            <Keys letter={'Y'} onClickButton = {onClickButton} />
            <Keys letter={'Z'} onClickButton = {onClickButton} />

        </div>
        </>
      )
    }
    



export default Keypad