export interface SecretFormProps {
    onFormSubmit: (data: SecretFormData) => void;
}

export interface SecretFormData {
    secret: string;
    expireAfter: number;
    expireAfterViews: number;
}