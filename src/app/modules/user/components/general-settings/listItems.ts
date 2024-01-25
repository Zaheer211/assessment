import { ListItemModel } from 'nextsapien-component-lib';

export function getOtherListItems(
    editLanguage: ((event?: ListItemModel | undefined) => void) | undefined,
    openRulesAndTerms: ((event?: ListItemModel | undefined) => void) | undefined
): ListItemModel[] {
    return [
        {
            label: "Language",
            value: "lang",
            actionName: "Edit",
            command: editLanguage,
        },
        {
            label: "Rules & Terms",
            value: "rulesAndTerms",
            command: openRulesAndTerms,
        },
        {
            label: "FAQs",
            value: "faqs"
        }
    ]
}

export function getSecurityAndPrivacyListItems(): ListItemModel[] {
    return [
        {
            label: "Manage Access and Devices",
            value: "manageAccessAndDevices",
            actionName: "Edit",
        },
        {
            label: "Sign Out of All Devices",
            value: "signOutAllDevices",
            actionName: "Edit",
        }
    ]
}

export function getTestingListItems(
    testingParticipationToggle: ((event?: ListItemModel | undefined) => void) | undefined
): ListItemModel[] {
    return [
        {
            label: "Testing Participation",
            value: "testingParticipation",
            actionName: "Toggle",
            command: testingParticipationToggle,
        }
    ]
}
