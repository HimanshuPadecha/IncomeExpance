const conf = {
    appWriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteApiEndpoint : String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
    appWriteDatabseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default conf