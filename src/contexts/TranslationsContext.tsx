import React from 'react';

export const TRANSLATION_MISSING_PLACEHOLDER = '';

const TRANSLATIONS: Translations = {
    backButtonText: 'back',
    nextButtonText: 'next'
};

interface Translations {
    readonly backButtonText: string;
    readonly nextButtonText: string;
}

interface TranslationsContextValue {
    readonly translations: Translations | undefined;
}

export const TranslationsContext = React.createContext<TranslationsContextValue>({
    translations: undefined
});

interface TranslationsContextProviderProps {
    readonly children: React.ReactNode;
}

export const TranslationsContextProvider: React.FC<TranslationsContextProviderProps> = ({
    children
}) => {
    const [translations, setTranslations] = React.useState<Translations>();

    React.useEffect(() => {
        if (!translations) {
            // simulate fetching translations
            setTranslations({ backButtonText: 'back', nextButtonText: 'save' });
        }
    }, []);

    return (
        <TranslationsContext.Provider
            value={{
                translations
            }}
        >
            {children}
        </TranslationsContext.Provider>
    );
};
