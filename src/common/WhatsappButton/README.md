Usage

This component injects the waplus script and calls CreateWhatsappBtn with default options.

Customization

Import the component and pass an `options` prop to override defaults:

<WhatsappButton options={{ chatButtonSetting: { phoneNumber: '1234567890', messageText: 'Hi' } }} />

Notes

- The script is injected once and left in the DOM; we intentionally do not remove it on unmount to avoid issues across route changes.
- If you need to remove the script on unmount, modify the component cleanup to remove the script tag and any global variables set by the third-party script.
