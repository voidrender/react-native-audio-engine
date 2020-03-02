#import "AudioEngine.h"
#import <AVKit/AVKit.h>

@interface AudioEngine()

@property (nonatomic, strong) AVAudioEngine *engine;
@property (nonatomic, strong) AVAudioMixerNode *mixer;

@end

@implementation AudioEngine

- (instancetype)init
{
    self = [super init];
    if (self) {
        self.engine = [[AVAudioEngine alloc] init];
        self.mixer = [[AVAudioMixerNode alloc] init];
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(pause)
{
    [self.engine pause];
}

RCT_EXPORT_METHOD(stop)
{
    [self.engine stop];
}

RCT_EXPORT_METHOD(addTrack:(NSString *)uri)
{
    AVAudioPlayerNode *node = [[AVAudioPlayerNode alloc] init];
    [self.engine attachNode:node];
    [self.engine connect:node to:self.mixer format:nil];
}

RCT_EXPORT_METHOD(sampleMethod:(NSString *)stringArgument numberParameter:(nonnull NSNumber *)numberArgument callback:(RCTResponseSenderBlock)callback)
{
    // TODO: Implement some actually useful functionality
    callback(@[[NSString stringWithFormat: @"numberArgument!!: %@ stringArgument!!: %@", numberArgument, stringArgument]]);
}


@end
