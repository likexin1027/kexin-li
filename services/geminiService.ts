
import { GoogleGenAI, Type } from "@google/genai";
import { VideoIdea, InspirationLabResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVideoIdeas = async (keyword: string): Promise<VideoIdea[]> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `作为“101俱乐部”（腾讯游戏创作者社区）的高端品牌顾问，请根据关键词“${keyword}”生成 3 个独特的“视频内容概念”。
    请使用 JSON 格式。所有文本内容必须使用简体中文。
    每个概念必须包含：
    - title: 标题
    - description: 详细描述
    - hook: 成员专享权益钩子
    - difficulty: 难度等级 (使用 'Gold' | 'Platinum' | 'Diamond')
    - style: 创作风格/类型
    - estimatedLength: 预计时长
    - musicType: 音乐/氛围类型
    - scenes: 阶段拆解 (包含 time: 时间点, action: 动作内容, visual: 视觉表现)
    - trends: 相关趋势关键词`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            hook: { type: Type.STRING },
            difficulty: { type: Type.STRING },
            style: { type: Type.STRING },
            estimatedLength: { type: Type.STRING },
            musicType: { type: Type.STRING },
            scenes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING },
                  action: { type: Type.STRING },
                  visual: { type: Type.STRING }
                }
              }
            },
            trends: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "description", "hook", "scenes", "trends"]
        }
      }
    }
  });

  try {
    const rawText = response.text.trim();
    const data = JSON.parse(rawText);
    return data.map((item: any, index: number) => ({
      ...item,
      id: `item-${Date.now()}-${index}`,
      difficulty: item.difficulty || 'Platinum',
    }));
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    return [];
  }
};

export const generateCreativeInspirations = async (keyword: string, type: string): Promise<InspirationLabResult | null> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `你是一名服务于“101俱乐部”腾讯游戏创作社区的顶级爆款策划专家。
    请针对关键词“${keyword}”和视频类型“${type}”，提供 4 个精准的“创作思路”和“爆款公式”。
    
    每个建议必须包含：
    1. 创作主题建议（核心要拍什么内容）
    2. 建议的爆款标题（吸引点击）
    3. 使用的爆款公式（如：认知失调法、情绪共鸣法、利益驱动法等）
    4. 爆款逻辑分析（为什么这个思路能火）
    5. 建议风格（视觉与剪辑风格）
    6. 预测爆款分数（0-100）

    所有输出内容必须使用简体中文，并以 JSON 格式输出。
    `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          keyword: { type: Type.STRING },
          suggestions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                theme: { type: Type.STRING, description: '创作内容主题建议' },
                titleSuggestion: { type: Type.STRING, description: '建议的视频标题' },
                formula: { type: Type.STRING, description: '运用的爆款公式' },
                viralLogic: { type: Type.STRING, description: '该思路的核心火爆逻辑' },
                style: { type: Type.STRING, description: '建议的剪辑风格' },
                viralScore: { type: Type.NUMBER, description: '爆款指数' }
              },
              required: ["theme", "titleSuggestion", "formula", "viralLogic", "style", "viralScore"]
            }
          },
          expertAdvice: { type: Type.STRING, description: '给创作者的一句话专家建议' }
        },
        required: ["keyword", "suggestions", "expertAdvice"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Failed to parse creative inspirations response:", error);
    return null;
  }
};
