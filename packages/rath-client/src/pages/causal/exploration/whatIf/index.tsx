import type { FC } from 'react';
import styled from 'styled-components';
import ConfigPanel from './configPanel';
import ConsoleTable from './consoleTable';
import { useWhatIfProvider } from './context';


const Container = styled.div`
    width: 100%;
`;

const WhatIf: FC = () => {
    const DoWhyProvider = useWhatIfProvider();

    return (
        <DoWhyProvider>
            <Container>
                <ConfigPanel />
                <ConsoleTable />
            </Container>
        </DoWhyProvider>
    );
};


export default WhatIf;