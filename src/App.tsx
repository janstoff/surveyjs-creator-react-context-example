import 'survey-core/defaultV2.css';
import 'survey-creator-core/survey-creator-core.css';

import { TranslationsContextProvider } from './contexts/TranslationsContext';
import { SurveyJSCreator } from './SurveyJSCreator';

function App() {
    return (
        <TranslationsContextProvider>
            <div className="fixed top-0 left-0 z-2000 bg-grey-background w-full h-full">
                <SurveyJSCreator />
            </div>
        </TranslationsContextProvider>
    );
}

export default App;
