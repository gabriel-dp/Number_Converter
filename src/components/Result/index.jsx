import { ResultText, ResultArea } from './styles';

const Result = ({ result }) => {
    return (
        <ResultArea>
            <ResultText>
                { isNaN(result) ? '' : result }
            </ResultText>
        </ResultArea>
    );
}

export default Result;