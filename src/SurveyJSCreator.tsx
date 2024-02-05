import 'survey-core/defaultV2.css';
import React from 'react';
import 'survey-creator-core/survey-creator-core.css';
import { SurveyCreatorComponent, SurveyCreator } from 'survey-creator-react';
import { TranslationsContext } from './contexts/TranslationsContext';

export function SurveyJSCreator() {
    //const creator = new SurveyCreator();
    const [creator] = React.useState(() => new SurveyCreator());
    const { translations } = React.useContext(TranslationsContext);

    return (
        <div className="w-full h-full">
            <div className="pb-14 h-full w-full">
                <SurveyCreatorComponent creator={creator} />;
            </div>
            <div className="fixed z-2000 bottom-0 left-0 p-2 h-14 w-full bg-primary flex justify-between items-center">
                <button className="py-2 px-4 text-white text-sm">
                    {translations?.backButtonText}
                </button>
                <button className="py-2 px-4 bg-secondary text-white text-sm">
                    {translations?.nextButtonText}
                </button>
            </div>
        </div>
    );
}
