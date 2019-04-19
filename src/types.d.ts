interface IVariant {
    /**
     * Текст на кнопке ответа
     */
    text: string;
    /**
     * Значение ответа
     */
    value: number;
}

interface IQuestion {
    /**
     * Текст вопроса
     */
    text: string;
    /**
     * Перечень ответов
     */
    variants: IVariant[];
    /**
     * Ответ на вопрос
     */
    answer?: number;
}

interface IInteractiveFormConfig {
    /**
     * Список вопросов
     */
    questions: IQuestion[];
    server: string;
}

/**
 * Глобальная переменная с параметрами приложения
 */
declare const inFormConfig: IInteractiveFormConfig;