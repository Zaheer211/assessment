
import { ListItemModel } from 'nextsapien-component-lib';

export default function getNotificationsListItems(
    inAppNotificationsToggle: ((event?: ListItemModel | undefined) => void) | undefined,
    pushNotificationsToggle: ((event?: ListItemModel | undefined) => void) | undefined,
    emailNotificationsToggle: ((event?: ListItemModel | undefined) => void) | undefined
): ListItemModel[] {
    return [
        {
            label: "In-app notifications",
            value: "inApp",
            actionName: "Toggle",
            command: inAppNotificationsToggle,
        },
        {
            label: "Push notifications",
            value: "push",
            actionName: "Toggle",
            command: pushNotificationsToggle,
        },
        {
            label: "Email notifications",
            value: "email",
            actionName: "Toggle",
            command: emailNotificationsToggle,
        }
    ]
}
