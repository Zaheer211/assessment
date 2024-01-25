
import { ListItemModel } from 'nextsapien-component-lib';

export default function getPayoutListItems(): ListItemModel[] {
    return [
        {
            label: "Manage Payment Information",
            value: "1234567890",
            actionName: "Edit",
        },
        {
            label: "Add Backup Payment Method",
            value: "1234567890",
            actionName: "Edit",
        },
        {
            label: "Payout Information",
            value: "1234567890",
            actionName: "Edit",
        },
        {
            label: "Change Payout Day",
            value: "1234567890",
            actionName: "Edit",
        },
        {
            label: "Redeem Gift Card or Promo Code",
            value: "1234567890",
            actionName: "Edit",
        },
        {
            label: "Where to Buy Gift Cards",
            value: "1234567890",
            actionName: "Edit",
        }
    ]
}
