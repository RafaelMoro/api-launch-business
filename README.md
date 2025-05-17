# API Launch Business

An intelligent API service that leverages OpenAI's capabilities to help entrepreneurs and business owners plan, analyze, and launch their businesses effectively.

## Overview

This API provides a suite of AI-powered endpoints designed to assist in business planning and analysis. It uses OpenAI's advanced language models to generate comprehensive business insights, market analysis, and planning documents.

## Features

- **Business Plan Generation**: Creates detailed business strategies, investment plans, goals, and risk assessments
- **Buyer Persona Analysis**: Generates detailed buyer personas based on business type and location
- **Initial Budget Planning**: Provides itemized budget estimates and financial considerations
- **Competition Analysis**: Performs real-time market research to identify and analyze competitors
- **Location Services**: Determines state and country from geographical coordinates

## API Endpoints

### Business Planning
- `POST /business-plan`
  - Creates a comprehensive business plan
  - Required: `{ "business": "string" }`

### Market Analysis
- `POST /buyer-persona`
  - Generates target audience personas
  - Required: `{ "business": "string", "state": "string", "country": "string" }`

### Financial Planning
- `POST /budget`
  - Provides initial budget estimates
  - Required: `{ "business": "string", "state": "string", "country": "string" }`

### Competition Research
- `POST /competition`
  - Analyzes market competition
  - Required: `{ "business": "string", "state": "string", "country": "string" }`

### Location Services
- `POST /state-country`
  - Determines location from coordinates
  - Required: `{ "longitude": "string", "latitude": "string" }`

## Technical Requirements

- Node.js
- NestJS framework
- OpenAI API key
- TypeScript

## Environment Setup

Create a `.env` file with the following variables:
```env
OPENAI_API_KEY=your_api_key_here
```

## Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run start:dev

# Build for production
npm run build
```

## Response Formats

All endpoints return responses in the following format:
```json
{
  "version": "string",
  "success": boolean,
  "message": "string",
  "data": object | null,
  "error": string | null
}
```

## Security

- API key validation for all requests
- Error handling and input validation
- Rate limiting (recommended for production)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT

## Support

For support, please open an issue in the repository or contact the development team.

---

Built with ❤️ using NestJS and OpenAI
