PaymentMethods Table:

```js
<PaymentMethodsTable
  methods={[
    {
      plan: 'PRO MONTHLY',
      subscription_id: '130143',
      update_url: '',
      cancel_url: '',
      payment_information: {
        payment_method: 'card',
        card_type: 'visa',
        last_four_digits: '4242',
        expiry_date: '12/2022',
      },
      last_payment: {
        amount: '10',
        currency: 'USD',
        date: '2021-08-19',
      },
      next_payment: {
        amount: '10',
        currency: 'USD',
        date: '2021-09-19',
      },
    },
    {
      plan: 'PRO YEARLY',
      subscription_id: '130209',
      update_url: '',
      cancel_url: '',
      payment_information: {
        payment_method: 'card',
        card_type: 'Master',
        last_four_digits: '4243',
        expiry_date: '12/2021',
      },
      last_payment: {
        amount: '100',
        currency: 'USD',
        date: '2021-08-19',
      },
      next_payment: {
        amount: '100',
        currency: 'USD',
        date: '2022-08-19',
      },
    },
  ]}
/>
```
