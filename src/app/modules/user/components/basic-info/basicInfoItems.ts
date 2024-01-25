
import { ListItemModel } from 'nextsapien-component-lib';

export default function getBasicInfoItems(editEmailCommand: ((event?: ListItemModel | undefined) => void) | undefined): ListItemModel[] {
    return [
        {
            label: "+1234567890",
            value: "1234567890",
            labelIconUrl: "/assets/icons/basic_info_icons/phone.svg",
        },
        {
            label: "someone@mail.omc",
            value: "1234567890",
            labelIconUrl: "/assets/icons/basic_info_icons/email.svg",
            command: editEmailCommand
        },
        {
            label: "Username",
            value: "1234567890",
            labelIconUrl: "/assets/icons/basic_info_icons/user.svg",
            actionName: "Edit",
        },
        {
            label: "Name",
            value: "1234567890",
            labelIconUrl: "/assets/icons/basic_info_icons/account_name.svg",
            actionName: "Edit"
        },
        {
            label: "Password",
            value: "1234567890",
            labelIconUrl: "/assets/icons/basic_info_icons/lock.svg",
            actionName: "Edit"
        }
    ]
}
