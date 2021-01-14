import DhcpSearchResultOtherServer, { IDhcpSearchResultOtherServer } from './DhcpSearchResultOtherServer';
import DhcpSearchResultStaticIP, { IDhcpSearchResultStaticIP } from './DhcpSearchResultStaticIP';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IDhcpSearchV4 {
    other_server?: IDhcpSearchResultOtherServer;
    static_ip?: IDhcpSearchResultStaticIP;
}

export default class DhcpSearchV4 {
    readonly _other_server: DhcpSearchResultOtherServer | undefined;

    get otherServer(): DhcpSearchResultOtherServer | undefined {
        return this._other_server;
    }

    readonly _static_ip: DhcpSearchResultStaticIP | undefined;

    get staticIp(): DhcpSearchResultStaticIP | undefined {
        return this._static_ip;
    }

    constructor(props: IDhcpSearchV4) {
        if (props.other_server) {
            this._other_server = new DhcpSearchResultOtherServer(props.other_server);
        }
        if (props.static_ip) {
            this._static_ip = new DhcpSearchResultStaticIP(props.static_ip);
        }
    }

    serialize(): IDhcpSearchV4 {
        const data: IDhcpSearchV4 = {
        };
        if (typeof this._other_server !== 'undefined') {
            data.other_server = this._other_server.serialize();
        }
        if (typeof this._static_ip !== 'undefined') {
            data.static_ip = this._static_ip.serialize();
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            other_server: !this._other_server ? true : this._other_server.validate().length === 0,
            static_ip: !this._static_ip ? true : this._static_ip.validate().length === 0,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IDhcpSearchV4>): DhcpSearchV4 {
        return new DhcpSearchV4({ ...this.serialize(), ...props });
    }
}