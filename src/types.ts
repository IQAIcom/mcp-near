import type { FastMCPSession } from "fastmcp";
import type { Account } from "near-api-js";
import type { KeyPairString } from "near-api-js/lib/utils";
export type HandlerContext = {
	account: Account;
};

export type NearEventListener = {
	eventName: string;
	contractId: string;
	handler: (input: any, context: HandlerContext) => Promise<any>;
	responseMethodName?: string;
	cronExpression?: string;
};

export type NearAgentConfig = {
	// Core NEAR connection config
	accountId: string;
	accountKey: KeyPairString;

	// Array of event listeners
	listeners: NearEventListener[];

	// Session
	session: FastMCPSession;

	// Optional configurations
	gasLimit?: string;
	networkConfig?: {
		networkId: string;
		nodeUrl: string;
	};
};

export type AgentEvent = {
	eventType: string;
	requestId: string;
	payload: any;
	sender: string;
	timestamp: number;
};
