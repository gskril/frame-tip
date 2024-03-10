import { Button } from 'frog'

import { backgroundStyles } from './styles'
import { CustomFrameContext } from '.'

const assets = [
  {
    name: '$DEGEN',
    network: 'base',
    image:
      'https://pbs.twimg.com/profile_images/1751028059325501440/9jrvP_yG_400x400.jpg',
    address: '0x4ed4e862860bed51a9570b96d89af5e1b0efefed',
  },
  {
    name: '$HIGHER',
    network: 'base',
    image: 'https://i.imgur.com/bdQcnVI.png',
    address: '0x0578d8a44db98b23bf096a382e016e29a5ce0ffe',
  },
]

export const tokenSelectionScreen = (c: CustomFrameContext) => {
  return c.res({
    image: (
      <div style={backgroundStyles}>
        <span style={{ fontSize: 106 }}>Pick Your Asset</span>
        <div style={{ display: 'flex', gap: 48 }}>
          {assets.map((asset) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(15, 36, 56, 0.1)',
                backgroundColor: '#FFFFFF',
                borderRadius: 32,
                gap: 16,
                padding: 48,
              }}
            >
              <img
                src={asset.image}
                width={54}
                height={54}
                style={{ borderRadius: 9999 }}
              />
              <span style={{ color: '#5E6773' }}>{asset.name}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    intents: assets.map((asset) => (
      <Button action={`/${asset.network}/${asset.address}`}>
        {asset.name}
      </Button>
    )),
  })
}
