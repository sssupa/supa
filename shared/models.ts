export type ThreadMessage = {
  id: string;
  role: string | null;
  text: string | null;
  inProgress: number | null;
  createdAt: number;
  updatedAt: number | null;
}

export type Thread = {
  id: string;
  agentId: string;
  createdAt: number;
  updatedAt: number | null;
  title: string | null;
}

export type Profile = {
  name: string;
}

export interface AgentConfig {
  id: string;
  name: string;
  button: string;
  description: string;
  instructions: string;
  targetLLM: string;
  meta?: { [key: string]: string };
}

export type ModelProvider = {
  id: string;
  name: string;
  access: ModelProviderAccessType;
  url: string;
  logoUrl: string;
};

export type ModelProviderAccessType = 'cloud' | 'local';