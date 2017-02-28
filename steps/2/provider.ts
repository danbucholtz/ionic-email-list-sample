

export class EmailProvider {
  getEmails(): Email[] {
    return [
      {
        senderName: 'Dan Bucholtz',
        senderAddress: 'dan.b@ionic.io',
        subject: `How's it going?`,
        body: `How's it going dude? Wanna grab lunch one of these days?`
      },
      {
        senderName: 'Graham Bucholtz',
        senderAddress: 'graham.b@gmail.com',
        subject: `Catch a Bucks game`,
        body: `Any interest in heading down to the BC and checking out a Bucks game?`
      },
      {
        senderName: 'Amazon',
        senderAddress: 'hello@amazon.com',
        subject: `Delivery estimate update for your Amazon.com order`,
        body: `Blah blah blah, your package is shipping`
      },
      {
        senderName: 'Direct TV Now',
        senderAddress: 'hello@directtv.com',
        subject: `Keep on streaming. You’ve got our best deal yet`,
        body: `Your prepaid period is ending soon, and your next payment will be charged on 7 Mar, 2017.*`
      },
      {
        senderName: 'Apple',
        senderAddress: 'hello@apple.com',
        subject: `Your receipt from Apple.`,
        body: `This email confirms payment for the iCloud storage plan listed above. You will be billed each plan period until you cancel by downgrading to the free storage plan from your iOS device, Mac or PC.`
      },
      {
        senderName: 'Tradeking Support',
        senderAddress: 'hello@tradeking.com',
        subject: `TradeKing - Dividend Received`,
        body: `We have credited your TradeKing account with the dividends paid by APPLE INC on 02/16/2017`
      },
    ]
  }
}

export interface Email {
  senderName: string;
  senderAddress: string;
  subject: string;
  body: string;
}