# Debug Report: Why Chat Widget is Failing

## The Problem
You are seeing "Connection Error" or "404 Not Found" because of **Google Cloud Permissions**.

### 1. The Error
The error `404 models/gemini-1.5-flash is not found` means your API Key is recognized, but **it typically implies the "Generative Language API" is NOT ENABLED for the specific project** associated with that key.

### 2. The Solution
You must enable the API manually. Creating a key isn't enough; the "service" must be turned on.

1.  **Click this link**: [Google Cloud Console - Enable API](https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com)
2.  **Select Project**: In the top blue bar, make sure the project selected matches the one where you made your API key.
3.  **Click ENABLE**: If you see a blue "ENABLE" button, click it.

### Code Update
I have updated your code to:
1.  **Default to `gemini-pro`**: This is the older, more compatible model.
2.  **Auto-Detect**: It tries to find if `gemini-1.5-flash` is available in the background.
3.  **Debug Mode**: The chat will now show the *exact* error code (e.g., 403, 404, 429) so you know for sure.

If you see **403 PERMISSION DENIED**, you *must* follow the steps above.
