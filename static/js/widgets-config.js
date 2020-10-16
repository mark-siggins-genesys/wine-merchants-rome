window._genesys = {
    widgets: {
      webchat: {
        transport: {
          type: 'purecloud-v2-sockets',
          dataURL: 'https://api.inintca.com',
          deploymentKey : '5d0f39f0-5f81-4051-be70-837bc6ff8636',
          orgGuid : '3d943ccc-9000-47c2-82e3-0044a94c11de',
          interactionData: {
            routing: {
              targetType: 'QUEUE',
              targetAddress: 'SalesAndSupport',
              priority: 2
            }
          }
        }
      }
    }
  };