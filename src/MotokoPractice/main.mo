actor {

    public shared (message) func whoami() : async Principal {
        return message.caller;
    };

    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };
};
